class SessionsController < ApplicationController
  def new
    @login = Login.new
  end

  def create
    @login = Login.new(login_params)
    if @login.valid?
      response = @login.create_session
      if response.token.nil?
        flash[:danger] = response.error
        render "new"
      else 
        session[:token] = response.token
        session[:email] = @login.email
        redirect_to root_path
      end
    else 
      flash[:danger] = @login.errors.full_messages.join('<br/>')
      render "new"
    end
  end

  def destroy
    session[:token] = nil
    session[:email] = nil 
    redirect_to root_path
  end

  private

  def login_params
    params.require(:login).permit(:email, :password)
  end
end
