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

export class Group {
    'configuration'?: { [key: string]: string; };
    'createdTime'?: number;
    'groupId'?: string;
    'lastModifiedTime'?: number;
    'operatorId'?: string;
    /**
    * An object which always contains at least one property \"name\" with a string value. If you give a subscriber/SIM a name, the name will be returned as the value of the \"name\" property. If the subscriber/SIM does not have a name, an empty string \"\" is returned. In addition, if you create any custom tags for the subscriber/SIM, each custom tag will appear as additional properties in the object.
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "number"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return Group.attributeTypeMap;
    }
}

