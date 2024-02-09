/* eslint-disable prettier/prettier */
//Arquivo de teste do controller
import { Test, TestingModule } from '@nestjs/testing';
import { PlantasController } from '../../../src/plantas/plantas.controller';
import { PlantasService } from '../../../src/plantas/shared/plantas.service/plantas.service';
import { Plantas } from '../../../src/plantas/shared/plantas';
import * as sinon from 'sinon';
import { expect } from 'chai';


describe('ProdutosController', () => {

  let controller: PlantasController;
  let testingModule: TestingModule;
  let plantasService: PlantasService;
  let plantas: Plantas;

  const mockPlantasService = {
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
  }

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      controllers: [PlantasController],
      providers: [
        { provide: PlantasService, useValue: mockPlantasService }
      ]
    }).compile();

    controller = testingModule.get<PlantasController>(PlantasController);
    plantasService = testingModule.get<PlantasService>(PlantasService);
  });

  after(async function () {
    testingModule.close();
  });

  describe("#get", () => {
    describe("check se os get works", function () {
      it("should verify if returns correctly", async () => {
        const spyExecute = sinon.spy(plantasService, "getAll");
        const result = await controller.getAll();
        expect(result).to.be.deep.eq([]);

        spyExecute.restore();
      });

    });
  });


  describe("#getById", () => {
    describe("check if getById works", function () {
      it("should verify if returns correctly", async () => {
        const spyGetById = sinon.spy(plantasService, "getById");
        const result = await controller.getById("any_id");
        expect(result).to.be.eq(plantas);

        spyGetById.restore();
      });

    });
  });

  describe("#create", () => {
    describe("check if create works", function () {
      it("should verify if returns correctly", async () => {
        const spyCreate = sinon.spy(plantasService, "create");
        const result = await controller.create(plantas);
        expect(result).to.be.eq(plantas);

        spyCreate.restore();
      });

    });
  });

  describe("#update", () => {
    describe("check if update works", function () {
      it("should verify if returns correctly", async () => {
        const spyUpdate = sinon.spy(plantasService, "update");
        const result = await controller.update("any_id", plantas);
        expect(result).to.be.eq(plantas);

        spyUpdate.restore();
      });
    });
  });

  describe("#delete", () => {
    describe("check if delete works", function () {
      it("should verify if returns correctly", async () => {
        const spyDelete = sinon.spy(plantasService, "delete");
        const result = await controller.delete("");
        expect(result).to.be.eq(plantas);

        spyDelete.restore();
      });
    });
  });

});
