class ApplicationController < ActionController::API
  before_action :authorized
    # include ::ActionController::Cookies


  def encode_token(payload)
    JWT.encode(payload, "my_secret")
    # JWT.encode(payload, Rails.application.credentials.secret)
  end

  def auth_header 
    request.headers['Authorization']
  end

  # def secret
  #     Rails.application.credentials.my_app_secret
  # end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_secret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def this_current_user 
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end
  
  
  def logged_in?
    # byebug
    !!this_current_user
  end
  
    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

    # #   debugger
    #     # Stefanos: there is no secret
    #     # method secret does not return secret, but nil
    #     # environmental issue (IE working on my comp instead of yours)
    #         # or programatic error (IE not establishing secret properly)?
end
