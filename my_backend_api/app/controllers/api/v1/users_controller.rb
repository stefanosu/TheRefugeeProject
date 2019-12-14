class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create] 
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    render json: UserSerializer.new(@users).serialized_json
  end

  def profile 
    render json:{ user: UserSerializer.new(current_user) }, status: :accepted 
  end
  # GET /users/1 
  def show
    # user_json = UserSerializer.new(@user).serialized_json
    render json: UserSerializer.new(@user).serialized_json
  end

  # POST /users
  def create 
    # byebug
    @user = User.create(user_params)
    if @user.valid? 
      @token = encode_token(user_id: @user.id )
      render json: { user: UserSerializer.new(@user), jwt: @token}, status: :created
    else
      render json: { error: 'Failed to create user' }, status: :not_acceptable
    end
  end

  # def create
  #   # byebug 
  #   @user = User.create(user_params)
  #   if @user.valid?
  #     session[:user_id] = @user.id
  #     render json: UserSerializer.new(@user).serialized_json , status: :created
  #   else
  #     render json: {
  #       error: @user.errors.full_messages.to_sentence}

  #   end
  # end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

    # Only allow a trusted parameter "white list" through.
  def user_params
    params.permit(:username, :password)
  end
end
