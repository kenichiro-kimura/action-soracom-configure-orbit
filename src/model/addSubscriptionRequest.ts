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

export class AddSubscriptionRequest {
    /**
    * [追加サブスクリプション](/ja-jp/resources/glossary/subscription/) の場合に、追加サブスクリプションのダウンロードが完了すると、すぐに有効化 (active) するかどうかを指定します。デフォルトは `true` です。 - `true`: すぐに有効化 (active) する - `false`: 無効 (inactive) を維持する。次の [ネットワーク登録](/ja-jp/resources/glossary/#ネットワーク登録) または [セッション](/ja-jp/resources/glossary/session/) 確立時に、追加サブスクリプションが有効化 (active) されます。  なお、バーチャル SIM/Subscriber の場合は、無視されます。 
    */
    'enable'?: boolean;
    /**
    * 追加する [セカンダリサブスクリプション](/ja-jp/resources/glossary/subscription/) - `planP1`、`planX1`、`planX2`、`planX3`: 追加サブスクリプション - `planArc01`: バーチャル SIM/Subscriber 
    */
    'subscription': AddSubscriptionRequest.SubscriptionEnum;
    /**
    * - `virtual`: `subscription` で `planArc01` を指定した場合 - `cellular`: `subscription` で `planArc01` 以外を指定した場合 
    */
    'type'?: AddSubscriptionRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enable",
            "baseName": "enable",
            "type": "boolean"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "AddSubscriptionRequest.SubscriptionEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AddSubscriptionRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AddSubscriptionRequest.attributeTypeMap;
    }
}

export namespace AddSubscriptionRequest {
    export enum SubscriptionEnum {
        PlanP1 = <any> 'planP1',
        PlanX1 = <any> 'planX1',
        PlanX2 = <any> 'planX2',
        PlanX3 = <any> 'planX3',
        PlanArc01 = <any> 'planArc01'
    }
    export enum TypeEnum {
        Virtual = <any> 'virtual',
        Cellular = <any> 'cellular'
    }
}
