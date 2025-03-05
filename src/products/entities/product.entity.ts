import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @Column({ type: 'decimal' })
    price: number

    @Column({ type: 'int' })
    stock: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @ManyToOne(() => Category, (category) => category.products)
    category: Category; // why not array ?? because one product belongs to one category
}