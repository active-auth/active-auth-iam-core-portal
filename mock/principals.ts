import {Request, Response} from 'express';

const data = [
  {
    id: '1',
    resourceLocator: 'iam://users/1/principal',
    owner: null,
    name: 'ponyma',
    createTime: 1609207567000,
    isSignatureCreatable: false,
    isSignatureUsable: false,
    isSessionCreatable: true,
    isSessionUsable: true,
  },
  {
    id: '2',
    resourceLocator: 'iam://users/2/principal',
    owner: null,
    name: 'jackma',
    createTime: 1609207571000,
    isSignatureCreatable: true,
    isSignatureUsable: true,
    isSessionCreatable: true,
    isSessionUsable: true,
  },
  {
    id: '3',
    resourceLocator: 'iam://users/3/principal',
    owner: null,
    name: 'robinlee',
    createTime: 1609207563000,
    isSignatureCreatable: true,
    isSignatureUsable: true,
    isSessionCreatable: true,
    isSessionUsable: true,
  },
  {
    id: '4',
    resourceLocator: 'iam://users/4/principal',
    owner: 'iam://users/1/principal',
    name: 'qinshihuang',
    createTime: 1609208704017,
    isSignatureCreatable: false,
    isSignatureUsable: false,
    isSessionCreatable: false,
    isSessionUsable: false,
  },
  {
    id: '5',
    resourceLocator: 'iam://users/5/principal',
    owner: 'iam://users/2/principal',
    name: 'napoleon',
    createTime: 1609208707000,
    isSignatureCreatable: false,
    isSignatureUsable: false,
    isSessionCreatable: true,
    isSessionUsable: true,
  },
];

const packedData = {
  total: 5,
  success: true,
  pageSize: 20,
  current: 1,
  data
}

const getPrincipals = (req: Request, res: Response) => {
  res.json(packedData);
};

export default {
  'GET /api/principals': getPrincipals,
};
