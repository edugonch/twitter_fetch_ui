class BaseBackendService

    def initialize
        @base_url = Rails.application.secrets.backend_url
        @api_path = Rails.application.secrets.api_path
    end

    def authentication(email, password)
        end_point = "#{@base_url}/authenticate"
        form = { email: email, password: password}

        begin
            RestClient.post(end_point, form, content_type: :json)
        rescue RestClient::ExceptionWithResponse => ex 
            return ex.response.body
        end
    end

    def get_twitts(tag, token)
        end_point = "#{@base_url}/#{@api_path}/twitts/#{URI.encode(tag)}"
        headers = {:Authorization => token}
        begin
            RestClient.get(end_point, headers)
        rescue RestClient::ExceptionWithResponse => ex 
            return ex.response.body
        end
    end

end