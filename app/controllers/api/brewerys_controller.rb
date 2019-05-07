class Api::BrewerysController < ApplicationController

    def create
        @brewery = Brewery.new(brewery_params)
        # debugger
        if @brewery.save
          render :show
        else
          render json: @brewery.errors.full_messages, status: 401
        end
    end

    def update

    end

    def show
        @brewery = Brewery.find(params[:id])
    end

    def destroy

    end

    private
      def brewery_params
        params.require(:brewery).permit(:name, :location, :category)
      end


end
