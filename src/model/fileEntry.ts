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

export class FileEntry {
    /**
    * コンテントの長さ
    */
    'contentLength'?: number;
    /**
    * コンテントタイプ
    */
    'contentType'?: string;
    /**
    * ファイルの作成時刻
    */
    'createdTime'?: number;
    /**
    * 親ディレクトリ名
    */
    'directory'?: string;
    /**
    * ファイルの ETag
    */
    'etag'?: string;
    /**
    * ファイルの絶対パス
    */
    'filePath'?: string;
    /**
    * ファイル名
    */
    'filename'?: string;
    /**
    * ディレクトリか否か
    */
    'isDirectory'?: boolean;
    /**
    * ファイルの更新時刻
    */
    'lastModifiedTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contentLength",
            "baseName": "contentLength",
            "type": "number"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "directory",
            "baseName": "directory",
            "type": "string"
        },
        {
            "name": "etag",
            "baseName": "etag",
            "type": "string"
        },
        {
            "name": "filePath",
            "baseName": "filePath",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "isDirectory",
            "baseName": "isDirectory",
            "type": "boolean"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FileEntry.attributeTypeMap;
    }
}

