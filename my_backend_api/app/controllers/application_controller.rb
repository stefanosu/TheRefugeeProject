class ApplicationController < ActionController::API
    include ::ActionController::Cookies


    def current_user 
        User.find_by(id:session[:user_id])
    end


    def logged_in?
        !!this_current_user
    end

    # def encode_token(payload)
    #     # JWT.encode payload, "secret", 'HS256'
    #     JWT.encode(payload, Rails.application.credentials.secret)
    # end


    # def user_payload(user)
    #     { user_id: user.id}
    # end

    # def secret
    #     Rails.application.credentials.my_app_secret
    # end

    # def token
    #     request.headers["Authorization"]
    # end

    # def decoded_token
    #     # JWT.decode token, secret, true, { algorithm: 'HS256' }
    #     JWT.decode(token, Rails.application.credentials.secret, true, algorithm: 'HS256')
    # end


    # def decoded_token
    #     # byebug
    #     if auth_header
    #       token = auth_header#.split(' ')[1]
    #       # header: { 'Authorization': 'Bearer <token>' }
    #       begin
    #         JWT.decode(token, Rails.application.credentials.secret, true, algorithm: 'HS256')
    #       rescue JWT::DecodeError
    #         nil
    #       end
    #     end
    #   end
    
    # def this_current_user
    #     # user_id = decoded_token[0]['user_id']
    #     User.find(decoded_token[0]["user_id"])
    #     end
    # end
    
    # def auth_header
    #     # { Authorization: 'Bearer <token>' }
    #     request.headers['Authorization']
    #   end
    

    #   def authorized
    #     render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    #   end
    # end

    # #   debugger
    #     # Stefanos: there is no secret
    #     # method secret does not return secret, but nil
    #     # environmental issue (IE working on my comp instead of yours)
    #         # or programatic error (IE not establishing secret properly)?
    


end
