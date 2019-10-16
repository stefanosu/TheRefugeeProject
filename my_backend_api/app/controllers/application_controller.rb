class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def encode_token(payload) 
        JWT.encode payload, "secret", "HS256" 
    end

    def user_payload(user)
        { user_id: user.id}
    end

    # payload = { user_id: user.id }

    # token = JWT.encode payload, "secret", "HS256" 

    # render json: { token: token }

    def this_current_user
        User.find_by(id:session[:user_id])
    end


    def logged_in? 
        !!this_current_user
    end 
end
