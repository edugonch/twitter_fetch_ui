class AuthenticationResponse

    attr_accessor :token, :error

    def initialize(response)
        if response.class.name == "String"
            @response = JSON.parse(response)
        else 
            @response = JSON.parse(response.body)
        end
        if @response["auth_token"]
            @token = @response["auth_token"]
        else 
            @error = @response["error"]["user_authentication"].join(', ')
        end
    end

    def valid?
        return !@token.nil? && @erro.nil?
    end
end