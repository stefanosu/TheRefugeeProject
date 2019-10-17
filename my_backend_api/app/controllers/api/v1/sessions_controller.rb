class Api::V1::SessionsController < ApplicationController

def login
    user = User.find_by(username: params[:username])
    is_authenticated = user.authenticate(params[:password]) 

    if is_authenticated 
        # binding.pry
        render json: { token: encode_token(user_payload(user)), user: user }
        
    else  
        render json: { error: "Wrong username and/or password. Sorry!" }
    end  
end
    # @user = User.find_by(username:params[:session][:username]) 
    # # binding.pry

    # if @user && @user.authenticate(params[:session][:password])
    #     session[:user_id] = @user.id 
    #     render json: @user
    # else  
    #     render json: {
        # end
    #         error: 'invalid credentials' 
    #     }

def get_current_user
    if logged_in?             
        render json: this_current_user
        # binding.pry
    else 
        render json: {
            error: 'No one logged in'
        }
    end
end

end 

