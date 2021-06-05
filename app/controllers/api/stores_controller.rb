class Api::StoresController < ApplicationController
  before_action :set_store, only: [:show, :update, :destroy]

  def index
    render json: Store.all
  end

  def show
    render json: @store
  end

  def create
    @store = Store.new(store_params)
    if(@store.save)
      render json: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  def update
    if(@store.update(store_params))
      render json: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @store.destroy
  end

  private

  def set_store
    @store = Store.find(params[:id])
  end

  def store_params
    params.require(:store).permit(:location, :rating, :name)
  end
end
