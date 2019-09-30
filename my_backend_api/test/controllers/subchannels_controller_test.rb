require 'test_helper'

class SubchannelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @subchannel = subchannels(:one)
  end

  test "should get index" do
    get subchannels_url, as: :json
    assert_response :success
  end

  test "should create subchannel" do
    assert_difference('Subchannel.count') do
      post subchannels_url, params: { subchannel: { channel_name: @subchannel.channel_name, post_id: @subchannel.post_id, user_id: @subchannel.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show subchannel" do
    get subchannel_url(@subchannel), as: :json
    assert_response :success
  end

  test "should update subchannel" do
    patch subchannel_url(@subchannel), params: { subchannel: { channel_name: @subchannel.channel_name, post_id: @subchannel.post_id, user_id: @subchannel.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy subchannel" do
    assert_difference('Subchannel.count', -1) do
      delete subchannel_url(@subchannel), as: :json
    end

    assert_response 204
  end
end
