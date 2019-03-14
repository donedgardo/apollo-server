import * as common from '../common';

describe('common', () => {
  it('uses the correct cache prefix', () => {
    expect(common.getStoreKey('abc123')).toStrictEqual('apq:abc123');
  });

  it('uses the v2 manifest suffix', () => {
    expect(
      common.getOperationManifestUrl('aServiceId', 'aSchemaHash'),
    ).toMatchInlineSnapshot(
      `"https://storage.googleapis.com/engine-op-manifest-storage-prod/aServiceId/aSchemaHash.v2.json"`,
    );
  });
});
