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
import { Cell } from './cell';

export class PreviousSessionStatus {
    'cell'?: Cell;
    /**
    * The time when the previous session was created.
    */
    'createdTime'?: number;
    /**
    * The time when the previous session was deleted.
    */
    'deletedTime'?: number;
    /**
    * Array of IP address of the DNS servers.
    */
    'dnsServers'?: Array<string>;
    'gatewayPrivateIpAddress'?: string;
    'gatewayPublicIpAddress'?: string;
    /**
    * The IMEI of the device using the SIM.
    */
    'imei'?: string;
    /**
    * The session ID of the previous session.
    */
    'sessionId'?: string;
    /**
    * The IP address of the device.
    */
    'ueIpAddress'?: string;
    /**
    * The Virtual Private Gateway IP address configured.
    */
    'vpgId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cell",
            "baseName": "cell",
            "type": "Cell"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "deletedTime",
            "baseName": "deletedTime",
            "type": "number"
        },
        {
            "name": "dnsServers",
            "baseName": "dnsServers",
            "type": "Array<string>"
        },
        {
            "name": "gatewayPrivateIpAddress",
            "baseName": "gatewayPrivateIpAddress",
            "type": "string"
        },
        {
            "name": "gatewayPublicIpAddress",
            "baseName": "gatewayPublicIpAddress",
            "type": "string"
        },
        {
            "name": "imei",
            "baseName": "imei",
            "type": "string"
        },
        {
            "name": "sessionId",
            "baseName": "sessionId",
            "type": "string"
        },
        {
            "name": "ueIpAddress",
            "baseName": "ueIpAddress",
            "type": "string"
        },
        {
            "name": "vpgId",
            "baseName": "vpgId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PreviousSessionStatus.attributeTypeMap;
    }
}

