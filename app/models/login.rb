class Login
    include ActiveModel::Model
    attr_accessor(
        :email,
        :password,
        :response
    )

    validates :email, presence: true, :email_address => true
    validates :password, presence: true

    def initialize(params={})
        @login_service = BaseBackendService.new
        @email = params[:email]
        @password = params[:password]
    end

    def create_session
        if valid?
            @response = AuthenticationResponse.new(@login_service.authentication(@email, @password))
        end
        @response
    end

end