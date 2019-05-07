class Api::VenuesController < ApplicationController

    def create
        @venue = Venue.new(venue_params)
        if @venue.save
          render :show
        else
          render json: @venue.errors.full_messages, status: 401
        end
    end

    def update

    end

    def show
        @venue = Venue.find(params[:id])
    end

    def destroy

    end

    private
      def venue_params
        params.require(:venue).permit(:name, :location, :category)
      end

end
