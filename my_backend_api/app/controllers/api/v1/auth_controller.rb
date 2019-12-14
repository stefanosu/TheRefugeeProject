class Api::V1::AuthController < ApplicationController
  # skip_before_action :authorized, only: [:login]

  def login 
    # byebug
    @user = User.find_by(username: login_params[:username])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(login_params[:password])
      # encode token comes from ApplicationController
      token = encode_token( { user_id: @user.id }, secret, 'HS256' )
      render json: { user: UserSerializer.new(@user), token: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  #this method perists the user #
  def persist
    # byebug
    if request.headers['Authorization']
      encoded_token = request.headers['Authorization'].split(' ')[1]
      token = JWT.decode(encoded_token, secret)
      user_id = token[0]['user_id'] 
      user = User.find(user_id)
      render json: { user: UserSerializer.new(user), token: token }
    end
  end

private

def login_params 
  params.permit(:username, :password)
end


end
