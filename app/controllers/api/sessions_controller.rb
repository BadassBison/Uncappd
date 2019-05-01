class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
          render json: ['Invalid credentials!'], status: 401
        else
          login_user(@user)
          render 'api/users/show';
        end
      end
    
      def destroy
        logout_user
        render json: { message: 'Logout successful.' }
      end

end
