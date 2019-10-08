class V1::UsersController < V1Controller
  def upload_document
    begin
      if params[:user_document]
        # Trying to check if file is an image
        # puts Mime::Types.type_for(params[:user_document])
        User.first.user_document.attach(params[:user_document])
      else
        render json: {message: 'No document sent'}, status: 422
      end
    rescue Exception => exception
      render json: { message: "Coudn't attach file", errors: exception.message }, status: 500
    end
  end

  private
  def user_params
    require(:user).permit(:user_document)
  end
end