class HomeController < ApplicationController
  before_action :authorize!
  
  def index
  end

  def get_twitts
    service = BaseBackendService.new
    @twitts = service.get_twitts(params[:tags], session[:token])

    render json: JSON.parse(@twitts)
  end

end
