package com.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class ReviewsMapperTest {

    private ReviewsMapper reviewsMapper;

    @BeforeEach
    public void setUp() {
        reviewsMapper = new ReviewsMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 1L;
        assertThat(reviewsMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(reviewsMapper.fromId(null)).isNull();
    }
}
