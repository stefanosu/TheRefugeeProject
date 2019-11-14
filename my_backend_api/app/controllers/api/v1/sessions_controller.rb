class Api::V1::SessionsController < ApplicationController

# def login
#     user = User.find_by(username: params[:username])
#     is_authenticated = user.authenticate(params[:password]) 

#     if is_authenticated 
#         # binding.pry
#         render json: { token: encode_token(user_payload(user)), user: user }
#     else  
#         render json: { error: "Wrong username and/or password. Sorry!" }
#     end  
# end


def login
    user = User.find_by(username: params[:username])
    # byebug
    is_authenticated = user.authenticate(params[:password])
        if is_authenticated
        render json: { token: encode_token(user_payload(user)) }

        else
        render json: { error: "Wrong username and/or password. Sorry!" }
        end
end


def get_current_user
    # byebug
    if logged_in?
        render json: this_current_user
    else 
        render json: {
            error: 'No one logged in'
        }
    end
end

def destroy  
    session.clear 
    render json: {
        notice: 'You have logged out successfully!'
    }
end

end
