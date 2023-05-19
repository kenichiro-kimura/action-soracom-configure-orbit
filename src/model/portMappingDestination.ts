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

export class PortMappingDestination {
    /**
    * 対象となる IMSI
    */
    'imsi': string;
    /**
    * デバイスが SSH 接続を待ち受けているポート番号
    */
    'port': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imsi",
            "baseName": "imsi",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PortMappingDestination.attributeTypeMap;
    }
}

