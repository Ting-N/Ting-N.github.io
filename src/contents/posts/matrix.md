---
title: 线性代数之行列式的性质
published: 2025-03-08
description: 练习使用Markdown.
tags: [线性代数]
category: Markdown练习
draft: false
---

# 行列式的性质

## 性质1

**行列式与它的转置行列式相等，即 $$D=D^T$$.**

## 性质2

**交换行列式的两行（列），行列式变号.**

### 推论1

**若行列式中有两行（列）的对应元素相同，则此行列式为零.**

## 性质3

**用数$k$乘行列式的某一行（列），等于用数$k$乘此行列式，即 $D_1=\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots &  & \vdots \\ ka_{i1} & ka_{i2} & \cdots & ka_{in} \\ \vdots & \vdots &  & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}=k\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots &  & \vdots \\ a_{i1} & a_{i2} & \cdots & a_{in} \\ \vdots & \vdots &  & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}=kD$.**

### 推论2

**行列式的某一行（列）中所有元素的公因子可以提到行列式符号的外面.**

### 推论3

**行列式中若有两行（列）元素成比例，则此行列式为零.**

## 性质4

**若行列式的某一行（列）的元素都是两数之和，设 $D=\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots & \vdots & \vdots \\ b_{i1}+c_{i1} & b_{i2}+c_{i2} & \cdots & b_{in}+c_{in} \\ \vdots & \vdots & \vdots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix},  $ 则 $D=\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots & \vdots & \vdots \\ b_{i1} & b_{i2} & \cdots & b_{in} \\ \vdots & \vdots & \vdots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}+\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots & \vdots & \vdots \\ c_{i1} & c_{i2} & \cdots & c_{in} \\ \vdots & \vdots & \vdots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}=D_1+D_2.$**

## 性质5

**将行列式的某一行（列）的所有元素都乘以数$k$后加到另一行（列）对应位置的元素上，行列式的值不变.**

**例如，以数 $k$ 乘第 $j$ 列加到第 $i$ 列上，则有 $D=\begin{vmatrix}a_{11} & \cdots &a_{1i}  & \cdots &a_{1j} & \cdots & a_{1n} \\ a_{21} & \cdots &a_{2i}  & \cdots &a_{2j} & \cdots & a_{2n} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a_{n1} & \cdots &a_{ni}  & \cdots &a_{nj} & \cdots & a_{nn} \end{vmatrix}=\begin{vmatrix}a_{11} & \cdots &a_{1i}+ka_{1j}  & \cdots &a_{1j} & \cdots & a_{1n} \\ a_{21} & \cdots &a_{2i}+ka_{2j}  & \cdots &a_{2j} & \cdots & a_{2n} \\ \vdots & & \vdots & & \vdots & & \vdots \\ a_{n1} & \cdots &a_{ni}+ka_{nj}  & \cdots &a_{nj} & \cdots & a_{nn} \end{vmatrix}=D_1(i\neq j)$.**