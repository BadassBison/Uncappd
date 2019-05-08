class Api::BeersController < ApplicationController

    def create
        @beer = Beer.new(beer_params)
        if @beer.save
          render :show
        else
          render json: @beer.errors.full_messages, status: 401
        end
    end

    def update

    end

    def show
        @beer = Beer.find(params[:id])
    end

    def destroy

    end

    private
      def beer_params
        params.require(:beer).permit(:name, :beer_type, :rating, :brewery_id)
      end

end
