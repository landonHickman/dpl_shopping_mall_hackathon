class Api::ItemsController < ApplicationController
  before_action :set_store
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: {store: @store, item: @store.items}
  end

  def show
    render json: @item
  end

  def create
    @item = @store.items.new(item_params)
    if(@item.save)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def update
    if(@item.update(item_params))
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @item.destroy
  end

  private

  def set_store
    @store = Store.find(params[:store_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :desc, :price)
  end
end