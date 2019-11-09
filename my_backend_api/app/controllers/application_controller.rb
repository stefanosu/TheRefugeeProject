class ApplicationController < ActionController::API
    include ::ActionController::Cookies


    def encode_token(payload)
        JWT.encode payload, "secret", 'HS256'
    end

    def user_payload(user)
        { user_id: user.id}
    end

    def secret
        Rails.application.credentials.my_app_secret
    end

    def token
        request.headers["Authorization"]
    end

    def decoded_token
      debugger
      # Stefanos: there is no secret
        # method secret does not return secret, but nil
          # environmental issue (IE working on my comp instead of yours)
            # or programatic error (IE not establishing secret properly)?
      JWT.decode token, secret, true, { algorithm: 'HS256' }
    end

    def this_current_user
        User.find(decoded_token[0]["user_id"])
    end


    # def this_current_user
    #     # byebug
    #     # user_id = encode_token['user_id']
    #     User.find(decoded_token[0]['user_id'])
    # end


    def logged_in?
        !!this_current_user
    end
end
