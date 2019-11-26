class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    render json: UserSerializer.new(@users).serialized_json
  end

  # GET /users/1 
  def show
    # user_json = UserSerializer.new(@user).serialized_json
    render json: @user
    
  end

  # POST /users
  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      render json: @user, status: :created
    else
      resp = {
        error: @user.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end
    # @user = User.create(user_params)
    # # byebug
    # if @user.valid? 
    #     render json: @user 
    # else 
    #   render json: @user.errors.full_messages 
    # end
    # if @user.valid? 
    #   render json: { token: encode_token(user_payload(@user)) }
    # else 
    #   render json: {errors: @user.errors.full_messages}
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
