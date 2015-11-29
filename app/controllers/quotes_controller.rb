class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
  end

  def create
    @quote = Quote.new(quote_params)

    if @quote.save
      render json: @quote
    else
      render json: @quote.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @quote = Quote.find(params[:id])
    @quote.destroy
    head :no_content
  end

  private

  def quote_params
    params.require(:quote).permit(:content, :url, :notes, :author)
  end
end
