/**
 * SORACOM API
 * SORACOM API v1
 *
 * The version of the OpenAPI document: 20230427-035008
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class CreateAndUpdateCredentialsModel {
    'credentials'?: object;
    'description'?: string;
    'type'?: CreateAndUpdateCredentialsModel.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "object"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateAndUpdateCredentialsModel.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateAndUpdateCredentialsModel.attributeTypeMap;
    }
}

export namespace CreateAndUpdateCredentialsModel {
    export enum TypeEnum {
        AwsCredentials = <any> 'aws-credentials',
        AzureCredentials = <any> 'azure-credentials',
        Psk = <any> 'psk',
        X509 = <any> 'x509'
    }
}