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

export class TagUpdateRequest {
    'tagName': string;
    'tagValue': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tagName",
            "baseName": "tagName",
            "type": "string"
        },
        {
            "name": "tagValue",
            "baseName": "tagValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TagUpdateRequest.attributeTypeMap;
    }
}

