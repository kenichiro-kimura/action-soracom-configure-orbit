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
import { ReferenceUrl } from './referenceUrl';

export class Insight {
    /**
    * 異常と思われる状況を検出した時間。フォーマットは category に関するイベントのタイムスタンプに依存します。（例：session の場合は UNIX 時間 (ミリ秒)）
    */
    'anomalyDetectedTimes'?: Array<string>;
    'category'?: Insight.CategoryEnum;
    'insightId'?: string;
    'message'?: string;
    /**
    * インサイトに関連のある参考情報の URL
    */
    'referenceUrls'?: Array<{ [key: string]: ReferenceUrl; }>;
    'severity'?: Insight.SeverityEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "anomalyDetectedTimes",
            "baseName": "anomalyDetectedTimes",
            "type": "Array<string>"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Insight.CategoryEnum"
        },
        {
            "name": "insightId",
            "baseName": "insightId",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "referenceUrls",
            "baseName": "referenceUrls",
            "type": "Array<{ [key: string]: ReferenceUrl; }>"
        },
        {
            "name": "severity",
            "baseName": "severity",
            "type": "Insight.SeverityEnum"
        }    ];

    static getAttributeTypeMap() {
        return Insight.attributeTypeMap;
    }
}

export namespace Insight {
    export enum CategoryEnum {
        Data = <any> 'data',
        Session = <any> 'session',
        Sim = <any> 'sim',
        Others = <any> 'others',
        Unknown = <any> 'unknown'
    }
    export enum SeverityEnum {
        Error = <any> 'error',
        Warning = <any> 'warning',
        Info = <any> 'info',
        None = <any> 'none',
        Unknown = <any> 'unknown'
    }
}