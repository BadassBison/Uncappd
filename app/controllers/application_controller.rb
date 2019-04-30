class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login_user(user)
        session[:session_token] = user.reset_st!
    end

    def logout_user
        current_user.reset_st!
        session[:session_token] = nil
    end    

    def logged_in
        !!(current_user)
    end

    def require_to_login
        redirect_to new_session_url unless logged_in
    end

    # def require_to_logout
    #     redirect_to new_user_url unless logged_in
    # end

end
