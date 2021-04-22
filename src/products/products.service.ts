import { ProductDTO } from './product.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async getOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne(id);
  }

  async create(data: ProductDTO): Promise<ProductDTO> {
    const product = this.productsRepository.create(data);
    await this.productsRepository.save(data);
    return product;
  }

  async update(id: number, data: Partial<ProductDTO>) {
    const product = await this.getOne(id);
    if (!product) return 'Product does not exist';

    await this.productsRepository.update({ id }, data);
    return 'Product updated successfully';
  }

  async delete(id: number) {
    const product = await this.getOne(id);
    if (!product) return 'Product does not exist';

    await this.productsRepository.delete(id);
    return 'Product deleted successfully';
  }
}
