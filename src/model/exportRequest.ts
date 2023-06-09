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

export class ExportRequest {
    /**
    * 対象期間の開始日時 (UNIX 時間 (秒))
    */
    'from'?: number;
    /**
    * 履歴の詳細度。  - `month`: 月ごと - `day`: 日ごと - `minutes`: 分ごと 
    */
    'period'?: ExportRequest.PeriodEnum;
    /**
    * 対象期間の終了日時 (UNIX 時間 (秒))
    */
    'to'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "number"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "ExportRequest.PeriodEnum"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExportRequest.attributeTypeMap;
    }
}

export namespace ExportRequest {
    export enum PeriodEnum {
        Month = <any> 'month',
        Day = <any> 'day',
        Minutes = <any> 'minutes'
    }
}
