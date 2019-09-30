class Api::V2::SubchannelsController < ApplicationController
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
    @subchannel = Subchannel.new(subchannel_params)

    if @subchannel.save
      render json: @subchannel, status: :created, location: @subchannel
    else
      render json: @subchannel.errors, status: :unprocessable_entity
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
      params.require(:subchannel).permit(:channel_name, :user_id, :post_id)
    end
end
