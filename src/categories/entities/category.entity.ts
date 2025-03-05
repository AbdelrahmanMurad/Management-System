import { Product } from "src/products/entities/product.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]; // why array ?? because group of products
}