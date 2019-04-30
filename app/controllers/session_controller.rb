class SessionController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login_user(@user)
            redirect_to subs_url
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy!
        redirect_to new_user_url
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end
