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

export class GetVolumeDiscountResponse {
    /**
    * 契約日時
    */
    'contractDateTime'?: string;
    /**
    * 契約 ID
    */
    'contractId'?: string;
    /**
    * 契約月数
    */
    'contractTermMonth'?: number = 12;
    /**
    * Currency
    */
    'currency'?: GetVolumeDiscountResponse.CurrencyEnum;
    /**
    * 適用終了日
    */
    'endDate'?: string;
    /**
    * 初期費用
    */
    'initialCost'?: number;
    /**
    * 数量
    */
    'quantity'?: number;
    /**
    * 適用開始日
    */
    'startDate'?: string;
    /**
    * ステータス
    */
    'status'?: GetVolumeDiscountResponse.StatusEnum;
    /**
    * 単価
    */
    'unitPrice'?: number;
    /**
    * お支払い方法
    */
    'volumeDiscountPaymentType'?: GetVolumeDiscountResponse.VolumeDiscountPaymentTypeEnum;
    /**
    * 料金計算方法
    */
    'volumeDiscountType'?: GetVolumeDiscountResponse.VolumeDiscountTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contractDateTime",
            "baseName": "contractDateTime",
            "type": "string"
        },
        {
            "name": "contractId",
            "baseName": "contractId",
            "type": "string"
        },
        {
            "name": "contractTermMonth",
            "baseName": "contractTermMonth",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "GetVolumeDiscountResponse.CurrencyEnum"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "initialCost",
            "baseName": "initialCost",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GetVolumeDiscountResponse.StatusEnum"
        },
        {
            "name": "unitPrice",
            "baseName": "unitPrice",
            "type": "number"
        },
        {
            "name": "volumeDiscountPaymentType",
            "baseName": "volumeDiscountPaymentType",
            "type": "GetVolumeDiscountResponse.VolumeDiscountPaymentTypeEnum"
        },
        {
            "name": "volumeDiscountType",
            "baseName": "volumeDiscountType",
            "type": "GetVolumeDiscountResponse.VolumeDiscountTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return GetVolumeDiscountResponse.attributeTypeMap;
    }
}

export namespace GetVolumeDiscountResponse {
    export enum CurrencyEnum {
        Jpy = <any> 'JPY',
        Usd = <any> 'USD',
        Eur = <any> 'EUR'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Expired = <any> 'expired'
    }
    export enum VolumeDiscountPaymentTypeEnum {
        Monthly = <any> 'MONTHLY',
        Prepayment = <any> 'PREPAYMENT'
    }
    export enum VolumeDiscountTypeEnum {
        BasicChargeV2 = <any> 'SORACOM_AIR_BASIC_CHARGE_V2',
        BasicCharge = <any> 'SORACOM_AIR_BASIC_CHARGE',
        MonthlyFixedBasicCharge = <any> 'SORACOM_AIR_MONTHLY_FIXED_BASIC_CHARGE'
    }
}
