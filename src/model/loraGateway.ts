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

export class LoraGateway {
    'address'?: string;
    'createdTime'?: Date;
    'gatewayId'?: string;
    'lastModifiedTime'?: Date;
    'networkSetId'?: string;
    'online'?: boolean = false;
    'operatorId'?: string;
    'owned'?: boolean = false;
    'status'?: LoraGateway.StatusEnum;
    'tags'?: { [key: string]: string; };
    'terminationEnabled'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "Date"
        },
        {
            "name": "gatewayId",
            "baseName": "gatewayId",
            "type": "string"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "Date"
        },
        {
            "name": "networkSetId",
            "baseName": "networkSetId",
            "type": "string"
        },
        {
            "name": "online",
            "baseName": "online",
            "type": "boolean"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "owned",
            "baseName": "owned",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "LoraGateway.StatusEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "terminationEnabled",
            "baseName": "terminationEnabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LoraGateway.attributeTypeMap;
    }
}

export namespace LoraGateway {
    export enum StatusEnum {
        Active = <any> 'active',
        Terminated = <any> 'terminated',
        Ready = <any> 'ready',
        Instock = <any> 'instock'
    }
}
