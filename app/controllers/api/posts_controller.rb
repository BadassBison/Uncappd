class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        # debugger
        if @post.save
          render :show
        else
          render json: @post.errors.full_messages, status: 401
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post && @post.update(post_params)
          render :show
        elsif !@post
          render json: ['Could not locate post'], status: 400
        else
          render json: @post.errors.full_messages, status: 401
        end
    end

    def show
        @post = Post.find(params[:id])
    end

    def destroy

    end

    private
      def post_params
        params.require(:post).permit(:content, :user_id, :beer_id, :venue_id)
      end

end
