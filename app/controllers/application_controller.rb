class ApplicationController < ActionController::Base

    # protect_from_forgery with: :exception

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
    
    def require_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end

end
