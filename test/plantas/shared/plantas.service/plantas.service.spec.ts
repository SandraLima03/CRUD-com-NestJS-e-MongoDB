/* eslint-disable prettier/prettier */
//Arquivo de teste do serviço de plantas
import { Test, TestingModule } from '@nestjs/testing';
import { PlantasService } from '../../../../src/plantas/shared/plantas.service/plantas.service';
import { Plantas } from '../../../../src/plantas/shared/plantas';
import * as sinon from 'sinon';
import { expect } from 'chai';

describe('PlantasService', () => {
  let service: PlantasService;
  let testingModule: TestingModule;
  let plantas: Plantas;

  const mockPlantas = {
    getAll: async (): Promise<Plantas[]> => {
      return [];
    },

    getById: async (): Promise<Plantas> => {
      return ;
    },

    create: async (): Promise<Plantas> => {
      return;
    },

    update: async (): Promise<Plantas> => {
      return;
    },

    delete: async (): Promise<Plantas> => {
      return;
    }
  };

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      imports: [Plantas],
      providers: [
        PlantasService,
        { provide: 'Plantas', useValue: mockPlantas }, 
      ],
    }).compile();

    service = testingModule.get<PlantasService>(PlantasService);
  });
  
  after(async function () {
     testingModule.close();
  });

  describe("#get", () => {
    describe("check se os get works", function () {
      it("should verify if returns correctly", async () => {
        const spyExecute = sinon.spy(service, "getAll");
        const result = await service.getAll();
        expect(result).to.be.deep.eq([]);

        spyExecute.restore();
      });

    });
  });


  describe("#getById", () => {
    describe("check if getById works", function () {
      it("should verify if returns correctly", async () => {
        const spyGetById = sinon.spy(service, "getById");
        const result = await service.getById("any_id");
        expect(result).to.be.eq(plantas);

        spyGetById.restore();
      });

    });
  });

  describe("#create", () => {
    describe("check if create works", function () {
      it("should verify if returns correctly", async () => {
        const spyCreate = sinon.spy(service, "create");
        const result = await service.create(plantas);
        expect(result).to.be.eq(plantas);

        spyCreate.restore();
      });

    });
  });

  describe("#update", () => {
    describe("check if update works", function () {
      it("should verify if returns correctly", async () => {
        const spyUpdate = sinon.spy(service, "update");
        const result = await service.update("any_id", plantas);
        expect(result).to.be.eq(plantas);

        spyUpdate.restore();
      });
    });
  });

  describe("#delete", () => {
    describe("check if delete works", function () {
      it("should verify if returns correctly", async () => {
        const spyDelete = sinon.spy(service, "delete");
        const result = await service.delete("");
        expect(result).to.be.eq(plantas);

        spyDelete.restore();
      });
    });
  });

});