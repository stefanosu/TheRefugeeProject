class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def encode_token(payload)
        # binding.pry  
        JWT.encode payload, "secret", "HS256" 
    end

    def user_payload(user)
        { user_id: user.id}
    end
    # binding.pry

    def this_current_user
        # byebug
        user_id = encode_token['user_id']
        User.find_by(id:session[:user_id])
    end


    # def decode_token
    #     # byebug
    #     user.id.find_by(id:session[:user_id])
    # end 

    def logged_in? 
        !!this_current_user
    end 
end
