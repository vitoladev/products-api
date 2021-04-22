import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getAll();
  }

  @Get(':id')
  async getOne(@Param() { id }) {
    return this.productsService.getOne(id);
  }

  @Post()
  async create(@Body() product: ProductDTO) {
    return this.productsService.create(product);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() product: Partial<ProductDTO>) {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    return this.productsService.delete(id);
  }
}
