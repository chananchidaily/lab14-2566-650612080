"use client";
import {
  Container,
  Button,
  Rating,
  Text,
  Textarea,
  Title,
  Group,
  Pagination,
  Divider,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <>
      <Container size="600px">
        <Title order={2}>Food Review 🍕</Title>
        <Title order={4} mt={"sm"}>
          Your rating
        </Title>
        <Rating size="lg" />
        <Textarea
          size="sm"
          label="Your review"
          placeholder="Do you enjoy eating?"
          mt={"xs"}
          minRows={"3"}
        />
        <Button color="orange" mt={"xs"} size="sm">
          Submit Review
        </Button>
        <Divider my="sm" />
        <Group position="center">
          <Title order={4}>Elon Musk</Title>
          <Rating size="sm" defaultValue={5} />
        </Group>
        <Text align="center" color="dimmed">
          Best pizza in this world. I give you X score.
        </Text>
        <Divider my="sm" />
        <Group position="center">
          <Title order={4}>Mark Zuck</Title>
          <Rating size="sm" defaultValue={4} />
        </Group>
        <Text align="center" color="dimmed">
          My favourite part is pepperoni
        </Text>
        <Pagination total={20} color="orange" position="center" mt={"md"} />
        <Text align="center" color="dimmed" my="sm">
          Copyright © 2023 Chananchida Thawornwong 650612080
        </Text>
      </Container>
    </>
  );
}
