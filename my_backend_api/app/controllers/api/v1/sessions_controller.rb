# class Api::V1::SessionsController < ApplicationController
#   skip_before_action :authorized, only: [:login]

#   def login
#     byebug
#     @user = User.find_by(username: login_params[:username])
#     #User#authenticate comes from BCrypt
#     if @user && @user.authenticate(login_params[:password])
#       # encode token comes from ApplicationController
#       token = encode_token( { user_id: @user.id }, secret, 'HS256' )
#       render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
#     else
#       render json: { message: 'Invalid username or password' }, status: :unauthorized
#     end
#   end


# # def login 
# # @user = User.find_by(username: params[:session][:username])
# #     if @user && @user.authenticate(params[:session][:password]) 
# #         session[:user_id] = @user.id
# #         # byebug
# #         render json: UserSerializer.new(@user).serialized_json
# #     else 
# #         render json: {
# #             error: 'Invalid credentials'
# #         }
# #     end

# # def get_current_user
# #   # byebug
# #   if logged_in? 
# #     render json: current_user 
# #   else  
# #     render json: { error: 'No one logged in' }
# #   end
# # end

# # def get_current_user
# #     # byebug
# #   if !logged_in?  
# #     return render json: { error: 'No one logged in' }
# #   end

# #   render json: UserSerializer.new(current_user).serialized_json
# # end

# # def destroy  
# #     session.clear 
# #     render json: {
# #         notice: 'You have logged out successfully!'
# #     }, status: :ok
# # end

# private 

# def login_params 
#   params.permit(:username, :password)
# end

# end
