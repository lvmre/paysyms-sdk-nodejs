import { IRequest } from "../../../node-sdk-core/src/Core";
import { TokenHolder } from "../Response/TokenHolder";

/**
 * Class that represents an OAuth 2.0 Authentication/Authorization request. The execution will return a {@link TokenHolder}.
 */
export interface IOAuth2ClientCredentialsRequest extends IRequest<TokenHolder> {
    /**
     * Setter for the audience value to request
     *
     * @param audience the audience to request
     * @return this request instance.
     */
    setAudience(audience: string): IOAuth2ClientCredentialsRequest;
}
