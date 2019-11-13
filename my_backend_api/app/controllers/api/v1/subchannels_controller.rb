class Api::V1::SubchannelsController < ApplicationController
  before_action :set_subchannel, only: [:show, :update, :destroy]

  # GET /subchannels
  def index
    @subchannels = Subchannel.all
    render json: @subchannels 
  end

  # GET /subchannels/1
  def show
    render json: @subchannel
  end

  # POST /subchannels
  def create 
    @subchannel = Subchannel.create(subchannel_params)
    if @subchannel.valid? 
      render json: @subchannel
    else 
      render json: {errors: @subchannel.errors.full_messages}
    end
  end
  

  # PATCH/PUT /subchannels/1
  def update
    if @subchannel.update(subchannel_params)
      render json: @subchannel
    else
      render json: @subchannel.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subchannels/1
  def destroy
    @subchannel.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subchannel
      @subchannel = Subchannel.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def subchannel_params
      params.require(:subchannel).permit(:name, :user_id)
    end
end
