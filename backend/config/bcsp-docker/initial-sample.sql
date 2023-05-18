CREATE TABLE clients (
  id VARCHAR(40) PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE additional_info (
  id VARCHAR(40) PRIMARY KEY,
  client_id VARCHAR(40) REFERENCES clients(id),
  company TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clients (id, name, age, gender, created_at, updated_at)
VALUES
(
  '59761c23b30d971669fb42ff',
  'Dunlap Hubbard',
  36,
  'male',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
),
(
  '59761c233d8d0f92a6b0570d',
  'Kirsten Sellers',
  24,
  'female',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
),
(
  '59761c23fcb6254b1a06dad5',
  'Acosta Robbins',
  30,
  'male',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

INSERT INTO additional_info (id, client_id, company, email, phone, address, created_at, updated_at)
VALUES
(
  'ab3c9b46-6f4d-4ea7-a4aa-ee1f8d4f0e6b',
  '59761c23b30d971669fb42ff',
  'CEDWARD',
  'dunlaphubbard@cedward.com',
  '+1 (890) 543-2508',
  '169 Rutledge Street, Konterra, Northern Mariana Islands, 8551',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
),
(
  '6a4b3a66-5f37-4d85-8ba1-3f2f3a4e4c2b',
  '59761c233d8d0f92a6b0570d',
  'EMERGENT',
  'kirstensellers@emergent.com',
  '+1 (831) 564-2190',
  '886 Gallatin Place, Fannett, Arkansas, 4656',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
),
(
  '4ca0c5d4-5f26-4c58-a2f3-2f1d2b6e92c2',
  '59761c23fcb6254b1a06dad5',
  'ORGANICA',
  'acostarobbins@organica.com',
  '+1 (882) 441-3367',
  '697 Linden Boulevard, Sattley, Idaho, 1035',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);